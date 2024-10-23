using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class GameManagerPetShop2 : Singleton<GameManagerPetShop2>
{
    public ProductData productData;
    private ProductPetShop productChoose;
    private bool isEndGame;
    //UI
    public GameObject shopping;
    public GameObject handGuide;
    public TextMeshProUGUI txtMoney;
    public TextMeshProUGUI txtMission;
    public GameObject mission;
    public float totalMoney;

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

    private void Start()
    {
        Luna.Unity.LifeCycle.GameStarted();
        totalSlot = containerShelf.childCount;
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
        box.transform.DOMoveZ(10.45f, 0.7f).OnComplete(() =>
        {
            btnPlace.gameObject.SetActive(true);
            arrow.gameObject.SetActive(true);
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
            AudioManager.Instance.PlaySoundClipPlace();
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
                    txtMission.text = "Open the store";
                    box.SetActive(false);
                    cameraEnd.gameObject.SetActive(true);
                    mission.SetActive(false);
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
                mission.SetActive(false);
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
