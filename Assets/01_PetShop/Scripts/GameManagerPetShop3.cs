using Cinemachine;
using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;
public enum MisisonGamePlay3
{
    GetBoxCat,
    PutCatToCage,
}
public class GameManagerPetShop3 : Singleton<GameManagerPetShop3>
{
    public Transform charFollow;
    public MisisonGamePlay3 mission;

    private bool isInMission;
    public Button btnThrow;
    public GameObject handTut;
    public CinemachineBrain cinemachineBrain;
    private void Start()
    {
        Luna.Unity.LifeCycle.GameStarted();
        totalSlot = containerShelf.childCount;
        indexCustomer = 0;
        //currentCustomer = lstCustomer[indexCustomer];
        totalPriceCheckOut = 0;
        //curObjParent = lstObj[0];
        //curFillPosObjParent = lstFillPosObj[0];
        mission = MisisonGamePlay3.GetBoxCat;
        ActionMoveCatToCage();
        HandleButtonClick(false);
    }
    private void Update()
    {
        if (isEndGame)
        {
            if (Input.GetMouseButtonDown(0))
            {
                InstallFullGame();
            }
        }
    }
    //MoveCatToCage
    public Transform boxCat;
    public Transform cat;
    public Animator catInBox;
    public Transform VC_Start;
    public Transform VC_camCatToBox1;
    public Transform VC_camFollow;
    public Transform VC_camRotateCatCage;
    public Material matebox, mateboxOL;
    public MeshRenderer boxCatMesh;
    //[SerializeField] private SkinnedMeshRenderer skinnedBoxCat;
    //private MaterialPropertyBlock blockMaterialskinnedBoxCat;
    public void ActionMoveCatToCage()
    {
        cinemachineBrain.m_DefaultBlend.m_Time = 0.4f;
        StartCoroutine(HelperUtility.StartAction(() =>
        {

            VC_camCatToBox1.gameObject.SetActive(true);
            VC_Start.gameObject.SetActive(false);
            StartCoroutine(HelperUtility.StartAction(() =>
            {

                VC_camFollow.gameObject.SetActive(true);
                VC_camCatToBox1.gameObject.SetActive(false);
                StartCoroutine(HelperUtility.StartAction(() =>
                {
                    //if (skinnedBoxCat)
                    //{
                    //    if (blockMaterialskinnedBoxCat == null)
                    //        blockMaterialskinnedBoxCat = new MaterialPropertyBlock();
                    //    skinnedBoxCat.GetPropertyBlock(blockMaterialskinnedBoxCat);
                    //    blockMaterialskinnedBoxCat.SetTexture(texture);
                    //    skinnedBoxCat.SetPropertyBlock(blockMaterialskinnedBoxCat);
                    //}
                    boxCatMesh.material = mateboxOL;
                    boxCat.GetChild(2).gameObject.SetActive(true);
                    isInMission = true;
                    HandleButtonClick(true);
                }, 0.4f));

            }, 0.6f));
        }, 0.5f));
    }
    void HandleButtonClick(bool boolean)
    {
        btnThrow.gameObject.SetActive(boolean);
    }
    void HandleHandTut(bool boolean)
    {
        handTut.gameObject.SetActive(boolean);
    }
    //-2.1 1.24 4.5
    public void ClickHandGet()
    {
        if (!isInMission)
            return;
        switch (mission)
        {
            case MisisonGamePlay3.GetBoxCat:
                isInMission = false;
                HandleHandTut(false);
                HandleButtonClick(false);
                boxCat.GetChild(2).gameObject.SetActive(false);
                boxCat.transform.DOMove(new Vector3(-3.717f, 0.707f, 11.682f), 0.5f).OnComplete(() =>
                {
                    boxCatMesh.material = matebox;
                    boxCat.SetParent(charFollow);
                    boxCat.localPosition = new Vector3(0, -0.6f, 0);
                    boxCat.localEulerAngles = new Vector3(0, 0, 0);
                    charFollow.DOMove(new Vector3(-1.645f, 1.22f, 5.958f), 0.75f).SetDelay(0.2f).OnComplete(() =>
                    {
                        VC_camRotateCatCage.gameObject.SetActive(true);
                        charFollow.transform.DORotateQuaternion(Quaternion.Euler(0, -90f, 0), 0.4f);
                        StartCoroutine(HelperUtility.StartAction(() =>
                        {
                            isInMission = true;
                            HandleButtonClick(true);
                            HandleHandTut(true);
                            mission = MisisonGamePlay3.PutCatToCage;
                        }, 0.4f));
                    });
                });
                boxCat.transform.DORotateQuaternion(Quaternion.Euler(0, -27, 0), 0.5f);

                break;
            case MisisonGamePlay3.PutCatToCage:
                isInMission = false;
                HandleHandTut(false);
                HandleButtonClick(false);
                cat.parent = null;
                cat.transform.DOJump(new Vector3(-0.38f, 0.285f, 5.958f), 1.3f, 1, 0.7f).OnComplete(() =>
                {
                    boxCat.transform.DOLocalMove(new Vector3(boxCat.transform.localPosition.x, box.transform.localPosition.y + 1.6f, boxCat.transform.localPosition.z), 0.5f).OnComplete(() =>
                    {
                        Destroy(boxCat.gameObject);
                    });
                });
                break;
        }
    }

    public AudioManager audioManager;
    private ProductPetShop productChoose;
    //Spawn
    public Transform lstPosParent;
    public Transform container;
    public GameObject box;

    public Button btnPlace;
    public GameObject arrow;

    private List<GameObject> lstProduct = new List<GameObject>();
    private int totalSlot;
    private int index;
    //Shelf
    public Transform parentPosShelf;
    public Transform containerShelf;

    //End
    public GameObject cameraEnd;
    public GameObject readyOpen;
    public GameObject btnOpen;
    public GameObject arrowOpen;
    [HideInInspector] public bool isEndGame;

    //Payment
    public List<CustomerPetShopp> lstCustomer;
    public List<Transform> lstObj;
    public List<Transform> lstFillPosObj;
    public TextMeshProUGUI txtPerformCheckout;
    public GameObject guideClick;
    public GameObject hanGuideClick1;
    public GameObject hanGuideClick2;
    public GameObject hanGuideClick3;
    [HideInInspector] public bool availableSecondGuide;
    [HideInInspector] public bool availableThirtyGuide;
    public RaycastItemPetShop raycastItem;
    private Transform curObjParent;
    private Transform curFillPosObjParent;
    [HideInInspector] public CustomerPetShopp currentCustomer;
    public GameObject checkoutCard;
    public GameObject checkoutCash;
    public TextMeshProUGUI txtTotalPriceCard;
    public TextMeshProUGUI txtReceiveCash;
    public TextMeshProUGUI txtTotalPriceCash;
    public TextMeshProUGUI txtChangeCash;
    public TextMeshProUGUI txtGivingCashDF;
    public TextMeshProUGUI txtGivingCash;
    [HideInInspector] public float totalPriceCheckOut = 0;
    public GameObject dashCard, dashCash;
    public GameObject uiChecKOutCard;
    public GameObject uiChecKOutCash;
    private int indexCustomer;

    public void ActionGuide(bool show)
    {
    }
    //13.205
    public void CaculatorMoney(float subPrice, TypeProductPetShop type)
    {

    }
    public void ActiveUICheckOut(TypeCheckOut type)
    {
        if (type == TypeCheckOut.CARD)
        {
            checkoutCard.SetActive(true);

            checkoutCard.GetComponent<RectTransform>().DOAnchorPosX(-298f, 0.35f);
            dashCard.SetActive(true);
            uiChecKOutCard.gameObject.SetActive(true);
            uiChecKOutCash.gameObject.SetActive(false);
            if (indexCustomer == 2)
                EndGame();
            currentCustomer.cusAnim.methodPay.SetActive(false);

        }
        else
        {
            checkoutCash.SetActive(true);
            dashCash.SetActive(true);
            uiChecKOutCard.gameObject.SetActive(false);
            uiChecKOutCash.gameObject.SetActive(true);
            audioManager.PlaySoundOpenCash();
            checkoutCash.SetActive(true);
            checkoutCash.GetComponent<RectTransform>().DOAnchorPosX(-304f, 0.35f);
            txtReceiveCash.text = "$" + (totalPriceCheckOut + currentCustomer.change);
            txtTotalPriceCash.text = "$" + totalPriceCheckOut;
            txtChangeCash.text = "$" + currentCustomer.change.ToString("0.00");
            currentCustomer.cusAnim.methodPay.SetActive(false);
        }

    }
    public void AddMoney()
    {
    }
    public void ActionCustomer()
    {
        float delay = 0;
        curObjParent.gameObject.SetActive(true);
        for (int i = 0; i < curObjParent.childCount; i++)
        {
            StartCoroutine(IEMoveObj(delay, i));
            delay += 0.17f;
        }
    }
    public void EndCustomer()
    {
        if (currentCustomer.typeCheckOut == TypeCheckOut.CARD)
        {
            totalPriceCheckOut = 0;
            txtTotalPriceCard.text = "$" + 0;
            checkoutCard.SetActive(false);
            dashCard.SetActive(false);
            //hanGuideClick3.SetActive(false);
            currentCustomer.End();
        }
        else
        {
            txtTotalPriceCard.text = "$0";
            checkoutCash.SetActive(false);
            dashCash.SetActive(false);
            uiChecKOutCash.gameObject.SetActive(false);
            uiChecKOutCard.gameObject.SetActive(true);
            currentCustomer.End();
        }
    }
    IEnumerator IEMoveObj(float delay, int index)
    {
        yield return new WaitForSeconds(delay);
        audioManager.PlaySoundClipPlace();
        curObjParent.GetChild(index).transform.DOJump(curFillPosObjParent.GetChild(index).transform.position, 0.6f, 1, 0.35f);
        if (index == curFillPosObjParent.childCount - 1)
        {
            StartCoroutine(IEDelayCanPlay());
        }
    }
    IEnumerator IEDelayCanPlay()
    {
        yield return new WaitForSeconds(0.35f);
        raycastItem.isCanPlay = true;
        //ActionGuide(true);
    }
    public void UpdateTurnCheckOut()
    {
        indexCustomer++;
        txtPerformCheckout.text = "Perform Checkout\n" + indexCustomer.ToString() + "/3";
        currentCustomer = lstCustomer[indexCustomer];
        currentCustomer.gameObject.SetActive(true);
        totalPriceCheckOut = 0;
        currentCustomer.CheckOut();
        curObjParent = lstObj[indexCustomer];
        curFillPosObjParent = lstFillPosObj[indexCustomer];
    }
    public void UpdatePrice(float price)
    {
        totalPriceCheckOut += price;

        if (currentCustomer.typeCheckOut == TypeCheckOut.CARD)
        {
            txtTotalPriceCard.text = "$" + totalPriceCheckOut.ToString("0.00");
        }
        else
        {
            txtTotalPriceCard.text = "$" + totalPriceCheckOut.ToString("0.00");
        }

    }
    public void UpdateCustomer()
    {
        currentCustomer.curItemBuy += 1;
        if (currentCustomer.curItemBuy == currentCustomer.totalItemBuy)
        {
            currentCustomer.Pay();
        }
    }
    public void UpdateCustomerSize(bool isHor)
    {
        if (isHor)
        {
            for (int i = 0; i < lstCustomer.Count; i++)
            {
                lstCustomer[i].transform.GetChild(0).localScale = new Vector3(130f, 130f, 130f);
            }
        }
        else
        {
            for (int i = 0; i < lstCustomer.Count; i++)
            {
                lstCustomer[i].transform.GetChild(0).localScale = new Vector3(160, 160, 160);
            }
        }
    }
    public void ClickPlace()
    {
        if (index < 15)
        {
            audioManager.PlaySoundClipPlace();
            arrow.gameObject.SetActive(false);
            //lstProduct[0].GetComponent<MeshRenderer>().material = productChoose.mateOutLine;
            lstProduct[0].transform.SetParent(containerShelf);
            lstProduct[0].transform.DOLocalJump(parentPosShelf.GetChild(index).transform.localPosition, 0.4f, 1, 0.45f);
            lstProduct.RemoveAt(0);
            index++;
            if (index == 15)
            {
                box.transform.DOMoveY(transform.position.y - 2, 0.3f).OnComplete(() =>
                {
                    box.SetActive(false);
                    cameraEnd.gameObject.SetActive(true);
                    StartCoroutine(IEShowEndCard());

                });
                btnPlace.gameObject.SetActive(false);
            }
        }
        else
        {
            box.transform.DOMoveY(transform.position.y - 2, 0.3f).OnComplete(() =>
            {
                box.SetActive(false);
                cameraEnd.gameObject.SetActive(true);
                StartCoroutine(IEShowEndCard());

            });
            btnPlace.gameObject.SetActive(false);
        }

    }
    IEnumerator IEShowEndCard()
    {
        yield return new WaitForSeconds(1.4f);
        readyOpen.SetActive(true);
        btnOpen.SetActive(true);
        arrowOpen.SetActive(true);
        EndGame();

    }
    void SpawnProduct(GameObject obj, Vector3 pos)
    {
        //Debug.Log(obj.name);
        GameObject newObj = Instantiate(obj);
        newObj.transform.SetParent(container);
        newObj.transform.localPosition = pos;
        lstProduct.Add(newObj);
    }

    public void EndGame()
    {
        isEndGame = true;
        Luna.Unity.LifeCycle.GameEnded();

    }
    public void InstallFullGame()
    {
        Luna.Unity.Playable.InstallFullGame();
    }
}
