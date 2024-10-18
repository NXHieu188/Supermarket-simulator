using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ButtonCashPetShop : MonoBehaviour
{
    [SerializeField] private int money;
    public TypeMoney typeMoney;
    public void OnClick()
    {
        CheckOutCashPetShop.onClickCheckoutCash?.Invoke(typeMoney, money);
    }
}
