using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ButtonCaculator : MonoBehaviour
{
    [SerializeField] private TypePad typePad;
    public void OnClick()
    {
        CheckOutCard.onClickCaculator?.Invoke(typePad);
    }
}
