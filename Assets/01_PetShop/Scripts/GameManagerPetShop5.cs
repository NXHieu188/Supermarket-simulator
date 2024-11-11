using Cinemachine;
using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;
public enum MisisonGamePlay5
{
    SetUpShelf,
    GetBoxCat,
    PutCatToCage,
    GetBoxObj,
    PlaceObj,
}
public class GameManagerPetShop5 : Singleton<GameManagerPetShop5>
{
    public Transform charFollow;
    public MisisonGamePlay5 mission;

    private bool isInMission;
    public Button btnThrow;
    public GameObject handTut;
    public CinemachineBrain cinemachineBrain;
    private void Start()
    {
        Luna.Unity.LifeCycle.GameStarted();
        totalSlot = containerShelf.childCount;
        mission = MisisonGamePlay5.SetUpShelf;
        nextTime = Time.time;
    }
    private void Update()
    {
        if (isHoldInPlace)
        {
            if (nextTime < Time.time)
            {
                ClickPlace();
                nextTime = Time.time + delayTime;
            }
        }
        if (isEndGame)
        {
            if (Input.GetMouseButtonDown(0))
            {
                InstallFullGame();
            }
        }
    }
    //MoveCatToCage
    public Transform VC_camFollow;
    [Header("SetUpShelf")]
    public List<ShelfGuide> lstGuideShelf = new List<ShelfGuide>();
    public Transform VC_Start;
    public Transform VC_camLookDown;

    [Header("MoveCatToCage")]
    public Transform boxCat;
    public Transform cat;
    public Animator catInBox;
    public Transform VC_camRotateCatCage;
    public Material matebox, mateboxOL;
    public MeshRenderer boxCatMesh;
    [HideInInspector] public bool isDoneCat;

    //PlaceObj
    [Header("MoveToPlaceObj")]
    public Transform VC_camMoveToPlaceObj;
    public Transform VC_camMoveToPlaceObj1;
    public Transform VC_camMoveToPlaceObj2;
    public bool isHoldInPlace = false;
    public float delayTime;
    private float nextTime;

    [Header("EndGame")]
    public Transform VC_camEndGame;
    //[SerializeField] private SkinnedMeshRenderer skinnedBoxCat;
    //private MaterialPropertyBlock blockMaterialskinnedBoxCat;


    public ProductData productData;
    //UI
    public GameObject shopping;
    public GameObject handGuide;
    public TextMeshProUGUI txtMoney;
    public TextMeshProUGUI txtMission;
    public GameObject missionObj;
    public Image sliderProgress;
    public float totalMoney;

    //Spawn
    public Transform lstPosParent;
    public Transform container;
    public GameObject box;

    public Button btnPlace;

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


    public AudioManager audioManager;
    private ProductPetShop productChoose;
    [HideInInspector] public bool isEndGame;
    public void ActionMoveCatToCage()
    {
        cinemachineBrain.m_DefaultBlend.m_Time = 0.4f;
        VC_camLookDown.gameObject.SetActive(true);
        VC_Start.gameObject.SetActive(false);
        StartCoroutine(HelperUtility.StartAction(() =>
        {
            cinemachineBrain.m_DefaultBlend.m_Time = 0.7f;
            VC_camLookDown.gameObject.SetActive(false);
            VC_camFollow.gameObject.SetActive(true);
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
                cinemachineBrain.m_DefaultBlend.m_Time = 0.4f;
                boxCatMesh.material = mateboxOL;
                boxCat.GetChild(3).gameObject.SetActive(true);
                isInMission = true;
                HandleButtonClick(true);
                HandleHandTut(true);
            }, 0.7f));
        }, 0.6f));
    }
    void HandleButtonClick(bool boolean)
    {
        btnThrow.gameObject.SetActive(boolean);
    }
    void HandleHandTut(bool boolean)
    {
        handTut.gameObject.SetActive(boolean);
    }
    public void DoMissionSetUpShelf()
    {
        bool isDone = true;
        for (int i = 0; i < lstGuideShelf.Count; i++)
        {
            if (!lstGuideShelf[i].isDone)
            {
                isDone = false;
                continue;
            }
        }
        if (isDone)
        {
            AudioManager.Instance.PlaySoundClipCorrect();
            mission = MisisonGamePlay5.GetBoxCat;
            sliderProgress.DOFillAmount(0.25f, 0.2f);
            ActionMoveCatToCage();
            HandleButtonClick(false);
            txtMission.text = "Take the cat home";
            boxCat.GetChild(3).gameObject.SetActive(true);
        }
    }
    public void ClickGet()
    {
        if (!isInMission)
            return;
        switch (mission)
        {
            case MisisonGamePlay5.GetBoxCat:
                isInMission = false;
                HandleHandTut(false);
                HandleButtonClick(false);
                boxCat.GetChild(3).gameObject.SetActive(false);
                boxCatMesh.material = matebox;
                AudioManager.Instance.PlaySoundClipMoveBox();
                boxCat.transform.DOMove(new Vector3(-3.717f, 0.707f, 11.682f), 0.5f).OnComplete(() =>
                {
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
                            mission = MisisonGamePlay5.PutCatToCage;
                        }, 0.4f));
                    });
                });
                boxCat.transform.DORotateQuaternion(Quaternion.Euler(0, -27, 0), 0.5f);
                break;
            case MisisonGamePlay5.PutCatToCage:
                isInMission = false;
                HandleHandTut(false);
                HandleButtonClick(false);
                cat.parent = null;
                AudioManager.Instance.PlaySoundClipPlace();
                cat.transform.DOJump(new Vector3(-0.38f, 0.285f, 5.958f), 1.3f, 1, 0.7f).OnComplete(() =>
                {
                    isDoneCat = true;
                    sliderProgress.DOFillAmount(0.5f, 0.2f);
                    AudioManager.Instance.PlaySoundClipMoveBox();
                    boxCat.transform.DOLocalMove(new Vector3(boxCat.transform.localPosition.x - 2, boxCat.transform.localPosition.y, boxCat.transform.localPosition.z), 0.5f).OnComplete(() =>
                    {
                        AudioManager.Instance.PlaySoundClipCorrect();
                        Destroy(boxCat.gameObject);
                        txtMission.text = "Buy items for the store";
                        mission = MisisonGamePlay5.PlaceObj;
                        isInMission = true;
                        VC_camMoveToPlaceObj.gameObject.SetActive(true);
                        cinemachineBrain.m_DefaultBlend.m_Time = 0.4f;
                        StartCoroutine(HelperUtility.StartAction(() =>
                        {
                            VC_camMoveToPlaceObj.gameObject.SetActive(false);
                            VC_camMoveToPlaceObj1.gameObject.SetActive(true);
                            cinemachineBrain.m_DefaultBlend.m_Time = 0.6f;
                            StartCoroutine(HelperUtility.StartAction(() =>
                            {
                                VC_camMoveToPlaceObj1.gameObject.SetActive(false);
                                VC_camMoveToPlaceObj2.gameObject.SetActive(true);
                                cinemachineBrain.m_DefaultBlend.m_Time = 0.4f;
                                StartCoroutine(HelperUtility.StartAction(() =>
                                {
                                    shopping.gameObject.SetActive(true);
                                    handGuide.SetActive(true);
                                }, 0.41f));
                            }, 0.75f));
                        }, 0.55f));
                    });
                });
                break;

        }
    }
    public void GetProductChoose(TypeProductPetShop type)
    {
        productChoose = productData.GetProductPetShop(type);
    }
    public void ActionGuide()
    {
        handGuide.SetActive(false);
    }
    //13.205
    public void CaculatorMoney(float subPrice, TypeProductPetShop type)
    {
        totalMoney -= subPrice;
        var str = totalMoney.ToString("0.0");
        txtMoney.text = "$" + str;
        GetProductChoose(type);
        shopping.transform.DOScale(Vector2.zero, 0.5f).OnComplete(() =>
        {
            shopping.SetActive(false);
        });
        box.SetActive(true);
        box.transform.DOMoveZ(9.69f, 0.7f).OnComplete(() =>
        {
            btnPlace.gameObject.SetActive(true);
            txtMission.text = "Tap to place object on the shelf";
        });
        for (int i = 0; i < lstPosParent.childCount; i++)
        {
            SpawnProduct(productChoose.prefab, lstPosParent.GetChild(i).transform.localPosition);
        }
    }
    public void ClickPlace()
    {
        if (index < 15)
        {
            btnPlace.transform.GetChild(2).gameObject.SetActive(false);
            audioManager.PlaySoundClipPlace();
            //lstProduct[0].GetComponent<MeshRenderer>().material = productChoose.mateOutLine;
            lstProduct[0].transform.SetParent(containerShelf);
            lstProduct[0].transform.DOLocalJump(parentPosShelf.GetChild(index).transform.localPosition, 0.4f, 1, 0.45f);
            lstProduct.RemoveAt(0);
            index++;
            if (index == 15)
            {
                sliderProgress.DOFillAmount(0.75f, 0.2f);
                cinemachineBrain.m_DefaultBlend.m_Time = 1.4f;
                AudioManager.Instance.PlaySoundClipCorrect();
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
            cinemachineBrain.m_DefaultBlend.m_Time = 1.4f;
            box.transform.DOMoveY(transform.position.y - 2, 0.3f).OnComplete(() =>
            {
                box.SetActive(false);
                cameraEnd.gameObject.SetActive(true);
                StartCoroutine(IEShowEndCard());

            });
            isHoldInPlace = false;
            btnPlace.gameObject.SetActive(false);
        }

    }
    IEnumerator IEShowEndCard()
    {
        yield return new WaitForSeconds(1.4f);
        txtMission.text = "Open your store";
        readyOpen.SetActive(true);
        btnOpen.SetActive(true);
        arrowOpen.SetActive(true);
        EndGame();

    }
    void SpawnProduct(GameObject obj, Vector3 pos)
    {
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











    //OtherPlayAble
    [HideInInspector] public float totalPriceCheckOut = 0;

    [Header("OtherPlayableAds")]
    public TextMeshProUGUI txtPerformCheckout;
    public TextMeshProUGUI txtTotalMoney;
    public GameObject guideClick;
    public GameObject hanGuideClick1;
    public GameObject hanGuideClick2;
    public GameObject hanGuideClick3;
    [HideInInspector] public bool availableSecondGuide;
    [HideInInspector] public bool availableThirtyGuide;

    public TextMeshProUGUI txtTotalPriceCard;
    public GameObject checkoutCard;
    public TextMeshProUGUI txtReceiveCash;
    public TextMeshProUGUI txtTotalPriceCash;
    public TextMeshProUGUI txtChangeCash;
    public TextMeshProUGUI txtGivingCashDF;
    public TextMeshProUGUI txtGivingCash;
    public GameObject checkoutCash;

    public GameObject dashCard, dashCash;


    public GameObject uiChecKOutCard;
    public GameObject uiChecKOutCash;
    [HideInInspector] public CustomerPetShopp currentCustomer;

    public void ActiveUICheckOut(TypeCheckOut type)
    {

    }
    public void AddMoney()
    {

    }
    public void EndCustomer()
    {

    }
    public void UpdateTurnCheckOut()
    {

    }
    public void ActionCustomer()
    {

    }
    public void UpdatePrice(float price)
    {

    }
    public void UpdateCustomer()
    {

    }
    public void ActionGuide(bool boolean)
    {

    }
    public void UpdateCustomerSize(bool boolean)
    {

    }
}
