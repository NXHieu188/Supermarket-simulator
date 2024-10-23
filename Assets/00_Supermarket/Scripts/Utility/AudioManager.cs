using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Serialization;

public class AudioManager : Singleton<AudioManager>
{
    public AudioSource audioSourceFX;
    public AudioSource audioSourceBG;
    public AudioClip clipClick, clipScan, clipOpenCash, clipPlace, clipGiveCash, clipGiveCoin, clipCalculator, clipOk, clipWrong, clipMoveBox, clipMeo, clipCorrect;
    public void PlaySoundClipCorrect()
    {
        PlaySoundFX(clipCorrect, 1f);
    }
    public void PlaySoundClipMoveBox()
    {
        PlaySoundFX(clipMoveBox, 1f);
    }
    public void PlaySoundClipMeo()
    {
        PlaySoundFX(clipMeo, 0.3f);
    }
    public void PlaySoundClipScan()
    {
        PlaySoundFX(clipScan, 0.3f);
    }
    public void PlaySoundOpenCash()
    {
        PlaySoundFX(clipOpenCash, 0.3f);
    }
    public void PlaySoundClipClick()
    {
        PlaySoundFX(clipClick, 1);
    }
    public void PlaySoundClipPlace()
    {
        PlaySoundFX(clipPlace, 1);
    }
    public void PlaySoundClipOk()
    {
        PlaySoundFX(clipOk, 0.5f);
    }
    public void PlaySoundClipWrong()
    {
        PlaySoundFX(clipWrong, 0.5f);
    }
    void PlaySoundFX(AudioClip audioClip, float vol)
    {
        audioSourceFX.PlayOneShot(audioClip);
        audioSourceFX.volume = vol;
    }
    public void PlaySoundClickButton(TypeButton type)
    {
        switch (type)
        {
            case TypeButton.GIVE_CASH:
                PlaySoundFX(clipGiveCash, 1);
                break;
            case TypeButton.GIVE_COIN:
                PlaySoundFX(clipGiveCoin, 1);
                break;
            case TypeButton.CLICK_BUTTON:
                PlaySoundFX(clipCalculator, 0.3f);
                break;
            case TypeButton.OK:
                PlaySoundFX(clipOk, 0.3f);
                break;
        }
    }
    public void PlaySound()
    {
        audioSourceBG.volume = 1;
        audioSourceFX.volume = 1;
    }

    public void StopSound()
    {
        audioSourceBG.volume = 0;
        audioSourceFX.volume = 0;
    }
}