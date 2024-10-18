using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;

public class SoundButtonPetShop : MonoBehaviour, IPointerDownHandler
{
    public TypeButton typeButton;
    public void PlaySound()
    {
        GlobalGameManagerPetShop1.Instance.gameManagerInstance.audioManager.PlaySoundClickButton(typeButton);
    }
    public void OnPointerDown(PointerEventData eventData)
    {
        PlaySound();
    }
}
