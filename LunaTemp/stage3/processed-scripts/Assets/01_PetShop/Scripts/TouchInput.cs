using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;

public class TouchInput : MonoBehaviour, IPointerDownHandler, IPointerUpHandler
{
    public void OnPointerDown(PointerEventData eventData)
    {
        if (!GlobalGameManagerPetShop1.Instance.gameManagerInstance.isEndGame)
        {
            GlobalGameManagerPetShop1.Instance.gameManagerInstance.isHoldInPlace = true;
        }
    }
    public void OnPointerUp(PointerEventData eventData)
    {
        if (!GlobalGameManagerPetShop1.Instance.gameManagerInstance.isEndGame)
        {
            GlobalGameManagerPetShop1.Instance.gameManagerInstance.isHoldInPlace = false;
        }
    }
}
