using DG.Tweening;
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class CheckOutCardPetShop : MonoBehaviour
{
    public static Action<TypePad> onClickCaculator;
    public Text txtPrice;
    public GameObject wrongPayment;
    private List<string> lstNumber;
    private string str;

    private void Start()
    {
        onClickCaculator += OnProcessCalculator;
        lstNumber = new List<string>();
        //str = new StringBuilder();
    }

    public void OnProcessCalculator(TypePad typePad)
    {
        switch (typePad)
        {
            case TypePad.NUM_0:
                lstNumber.Add("0");
                str = String.Join("", lstNumber);
                break;
            case TypePad.NUM_1:
                lstNumber.Add("1");
                str = String.Join("", lstNumber);
                break;
            case TypePad.NUM_2:
                lstNumber.Add("2");
                str = String.Join("", lstNumber);
                break;
            case TypePad.NUM_3:
                lstNumber.Add("3");
                str = String.Join("", lstNumber);
                break;
            case TypePad.NUM_4:
                lstNumber.Add("4");
                str = String.Join("", lstNumber);
                break;
            case TypePad.NUM_5:
                lstNumber.Add("5");
                str = String.Join("", lstNumber);
                break;
            case TypePad.NUM_6:
                lstNumber.Add("6");
                str = String.Join("", lstNumber);
                break;
            case TypePad.NUM_7:
                lstNumber.Add("7");
                str = String.Join("", lstNumber);
                break;
            case TypePad.NUM_8:
                lstNumber.Add("8");
                str = String.Join("", lstNumber);
                break;
            case TypePad.NUM_9:
                lstNumber.Add("9");
                str = String.Join("", lstNumber);
                break;
            case TypePad.NUM_:
                lstNumber.Add(".");
                str = String.Join("", lstNumber);
                break;
            case TypePad.C:
                lstNumber.Clear();
                str = "";
                break;
            case TypePad.DELETE:
                if (lstNumber.Count > 0)
                    lstNumber.RemoveAt(str.Length - 1);
                str = String.Join("", lstNumber);
                break;
            case TypePad.OK:
                float price = 0;
                if (str.Length > 0)
                    price = HelperUtility.ParseFloat(str.ToString());
                //float one = Mathf.Round(price);
                //float two = Mathf.Round(GlobalGameManagerPetShop1.Instance.gameManagerInstance.totalPriceCheckOut);

                //Debug.Log(GlobalGameManagerPetShop1.Instance.gameManagerInstance.txtGivingCash.ToString());

                //Debug.Log(GlobalGameManagerPetShop1.Instance.gameManagerInstance.currentCustomer.change.ToString());
                if (price.ToString() == GlobalGameManagerPetShop1.Instance.gameManagerInstance.totalPriceCheckOut.ToString())
                {
                    GlobalGameManagerPetShop1.Instance.gameManagerInstance.audioManager.PlaySoundClipOk();
                    GlobalGameManagerPetShop1.Instance.gameManagerInstance.AddMoney();
                    GlobalGameManagerPetShop1.Instance.gameManagerInstance.EndCustomer();
                }
                else
                {
                    GlobalGameManagerPetShop1.Instance.gameManagerInstance.audioManager.PlaySoundClipWrong();
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
                }

                lstNumber.Clear();
                str = "";
                break;
            default:
                break;
        }

        SetPrice();
    }

    void SetPrice()
    {
        if (str.Length > 0)
        {
            txtPrice.text = str;
        }
        else
            txtPrice.text = "0";
    }
}
