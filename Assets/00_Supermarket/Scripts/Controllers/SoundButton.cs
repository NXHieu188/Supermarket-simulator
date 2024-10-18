using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;

public class SoundButton : MonoBehaviour, IPointerDownHandler
{
    public TypeButton typeButton;
    public void PlaySound()
    {
        GlobalInstance.Instance.gameManagerInstance.audioManager.PlaySoundClickButton(typeButton);
    }
    public void OnPointerDown(PointerEventData eventData)
    {
        PlaySound();
    }
}
