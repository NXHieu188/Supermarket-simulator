using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CardAndMoney : MonoBehaviour
{
    public Customer customer;
    public void ShowCheckOutUI()
    {
        GlobalInstance.Instance.gameManagerInstance.ActiveUICheckOut(customer.typeCheckOut);
        GlobalInstance.Instance.gameManagerInstance.audioManager.PlaySoundClipClick();
    }
}
