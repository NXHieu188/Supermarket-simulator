using DG.Tweening;
using UnityEngine;
using UnityEngine.EventSystems;
public class AnimScaleButton : AnimButtonBase
{
    [SerializeField] private Transform _gScale;
    [SerializeField] private float _fromScale = 1f;
    [SerializeField] private float _toScale = 0.9f;
    [SerializeField] private float _duration = 0.02f;
    private void Awake()
    {
        if (_gScale == null)
            _gScale = transform;
    }
    public override void OnPointerDown(PointerEventData eventData)
    {
        base.OnPointerDown(eventData);
        //Tween.Scale(_gScale, _toScale, _duration, Tween.Ease.OutBack);
        transform.DOScale(new Vector2(_toScale, _toScale), _duration).SetEase(Ease.OutBack);
    }
    public override void OnPointerUp(PointerEventData eventData)
    {
        base.OnPointerUp(eventData);
        //PrimeTween.Tween.Scale(_gScale, _fromScale, _duration, PrimeTween.Ease.OutBack);
        transform.DOScale(new Vector2(_fromScale, _fromScale), _duration).SetEase(Ease.OutBack);
    }
}
