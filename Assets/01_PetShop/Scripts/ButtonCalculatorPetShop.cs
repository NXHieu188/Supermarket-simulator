using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ButtonCalculatorPetShop : MonoBehaviour
{
    [SerializeField] private TypePad typePad;
    public void OnClick()
    {
        CheckOutCardPetShop.onClickCaculator?.Invoke(typePad);
    }
}
