using DG.Tweening;
using System;
using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;

public class CheckOutCash : MonoBehaviour
{
    public static Action<TypeMoney, int> onClickCheckoutCash;
    public TextMeshProUGUI txtChange;
    public GameObject wrongPayment;
    private List<string> lstNumber;
    private string str;


    //private List<float> listPrice;
    private float priceGiving;

    private void Start()
    {
        //listPrice = new List<float>();
        onClickCheckoutCash += ProcessClickCash;
    }

    private void ProcessClickCash(TypeMoney type, int value)
    {
        switch (type)
        {
            case TypeMoney.USD:
            {
                AddGiving(value);
                //listPrice.Add(value);
                break;
            }
            case TypeMoney.C:
            {
                AddGiving(value / 100f);
                //listPrice.Add(value / 100f);
                break;
            }
        }

        //_infoPayment.AddIconCash(type, value);
        CheckComplete();
    }

    void CheckComplete()
    {
        // float one = Mathf.Round(priceGiving);
        // float two = Mathf.Round(GlobalInstance.Instance.gameManagerInstance.currentCustomer.change);
        if (priceGiving.ToString() == GlobalInstance.Instance.gameManagerInstance.currentCustomer.change.ToString())
        {
            GlobalInstance.Instance.gameManagerInstance.txtGivingCashDF.color = Color.green;
            GlobalInstance.Instance.gameManagerInstance.txtGivingCash.color = Color.green;
        }
        else
        {
            GlobalInstance.Instance.gameManagerInstance.txtGivingCashDF.color = Color.red;
            GlobalInstance.Instance.gameManagerInstance.txtGivingCash.color = Color.red;
        }

        GlobalInstance.Instance.gameManagerInstance.txtGivingCash.text = "$" + priceGiving.ToString("0.00");
    }

    private void AddGiving(float valueBonus)
    {
        priceGiving += valueBonus;
        //_infoPayment.UpdateGiving(_priceGiving, IsCanPay());
    }

    public void OnClickClear()
    {
        //listPrice = new List<float>();
        priceGiving = 0;
        GlobalInstance.Instance.gameManagerInstance.txtGivingCash.text = "$0";
        GlobalInstance.Instance.gameManagerInstance.txtGivingCashDF.color = Color.red;
        GlobalInstance.Instance.gameManagerInstance.txtGivingCash.color = Color.red;
    }

    public void OnClickOK()
    {
        if (priceGiving.ToString() != GlobalInstance.Instance.gameManagerInstance.currentCustomer.change.ToString())
        {
            wrongPayment.SetActive(true);
            wrongPayment.transform.DOKill();
            wrongPayment.transform.localScale = Vector2.zero;
            wrongPayment.transform.DOScale(1, 0.3f).SetEase(Ease.OutBack).OnComplete(() =>
            {
                wrongPayment.transform.DOScale(0, 0.3f).SetDelay(0.7f).OnComplete(() =>
                {
                    wrongPayment.SetActive(false);
                });
            });
            GlobalInstance.Instance.gameManagerInstance.audioManager.PlaySoundClipWrong();
        }
        else
        {
            GlobalInstance.Instance.gameManagerInstance.audioManager.PlaySoundClipOk();
            GlobalInstance.Instance.gameManagerInstance.AddMoney();
            GlobalInstance.Instance.gameManagerInstance.EndCustomer();
        }
    }
}