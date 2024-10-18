using UnityEngine;
using UnityEngine.EventSystems;

public class AnimButtonBase : MonoBehaviour, IPointerDownHandler,IPointerUpHandler
{
    public virtual void OnPointerDown(PointerEventData eventData) { }
    public virtual void OnPointerUp(PointerEventData eventData) { }
}