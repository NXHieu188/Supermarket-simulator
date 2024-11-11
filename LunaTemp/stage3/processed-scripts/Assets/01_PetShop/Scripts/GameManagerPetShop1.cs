using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class GameManagerPetShop1 : Singleton<GameManagerPetShop1>
{
    public AudioManager audioManager;
    public List<CustomerPetShopp> lstCustomer;
    private int indexCustomer;

    [HideInInspector] public CustomerPetShopp currentCustomer;

    public List<Transform> lstObj;
    public List<Transform> lstFillPosObj;
    public RaycastItemPetShop raycastItem;

    [HideInInspector] public float totalPriceCheckOut = 0;
    private Transform curObj;
    private Transform curFillPosObj;

    [Header("UI")]
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
    //OtherPlayable
    public float totalMoney = 199;
    [HideInInspector] public bool isEndGame;

    public GraphicRaycaster mainCanvas;
    private void Start()
    {
        Luna.Unity.LifeCycle.GameStarted();
        indexCustomer = 0;
        currentCustomer = lstCustomer[indexCustomer];
        totalPriceCheckOut = 0;
        currentCustomer.CheckOut();
        curObj = lstObj[0];
        curFillPosObj = lstFillPosObj[0];
    }
    public void ActionGuide(bool show)
    {
        if (indexCustomer == 0)
        {
            guideClick.SetActive(show);
            hanGuideClick1.SetActive(show);
        }
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
        totalMoney += totalPriceCheckOut;
        txtTotalMoney.text = "$" + totalMoney;
    }
    public void ActionCustomer()
    {
        float delay = 0;
        curObj.gameObject.SetActive(true);
        for (int i = 0; i < curObj.childCount; i++)
        {
            StartCoroutine(IEMoveObj(delay, i));
            delay += 0.17f;
        }
    }
    public void EndCustomer()
    {
        if (currentCustomer.typeCheckOut == TypeCheckOut.CARD)
        {
            totalMoney += totalPriceCheckOut;
            txtTotalMoney.text = "$" + totalMoney;
            totalPriceCheckOut = 0;
            txtTotalPriceCard.text = "$" + 0;
            checkoutCard.SetActive(false);
            dashCard.SetActive(false);
            hanGuideClick3.SetActive(false);
            currentCustomer.End();
        }
        else
        {
            totalMoney += totalPriceCheckOut;
            txtTotalMoney.text = "$" + totalMoney;
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
        curObj.GetChild(index).transform.DOJump(curFillPosObj.GetChild(index).transform.position, 0.6f, 1, 0.35f);
        if (index == curFillPosObj.childCount - 1)
        {
            StartCoroutine(IEDelayCanPlay());
        }
    }
    IEnumerator IEDelayCanPlay()
    {
        yield return new WaitForSeconds(0.35f);
        raycastItem.isCanPlay = true;
        ActionGuide(true);
    }
    public void UpdateTurnCheckOut()
    {
        indexCustomer++;
        txtPerformCheckout.text = "Perform Checkout\n" + indexCustomer.ToString() + "/3";
        currentCustomer = lstCustomer[indexCustomer];
        currentCustomer.gameObject.SetActive(true);
        totalPriceCheckOut = 0;
        currentCustomer.CheckOut();
        curObj = lstObj[indexCustomer];
        curFillPosObj = lstFillPosObj[indexCustomer];
    }
    public void EndGame()
    {
        isEndGame = true;
        mainCanvas.enabled = false;
        Luna.Unity.LifeCycle.GameEnded();

    }
    public void InstallFullGame()
    {
        Luna.Unity.Playable.InstallFullGame();
    }


    //OtherPlayable
    //public void CaculatorMoney(float totalPrice, TypeProductPetShop type)
    //{
    //    ActionGuide(true);
    //}
    //public void ActionGuide()
    //{
    //}

}
