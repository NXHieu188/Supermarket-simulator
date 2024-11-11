using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CardAndMoneyPetShop : MonoBehaviour
{
    public CustomerPetShopp customer;
    public void ShowCheckOutUI()
    {
        GlobalGameManagerPetShop1.Instance.gameManagerInstance.ActiveUICheckOut(customer.typeCheckOut);
        GlobalGameManagerPetShop1.Instance.gameManagerInstance.audioManager.PlaySoundClipClick();
    }
}
