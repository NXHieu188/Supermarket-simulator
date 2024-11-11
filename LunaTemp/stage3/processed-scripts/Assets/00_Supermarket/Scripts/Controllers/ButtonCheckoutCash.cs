using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ButtonCheckoutCash : MonoBehaviour
{
    [SerializeField] private int money;
    public TypeMoney typeMoney;
    public void OnClick()
    {
        CheckOutCash.onClickCheckoutCash?.Invoke(typeMoney, money);
    }
}
