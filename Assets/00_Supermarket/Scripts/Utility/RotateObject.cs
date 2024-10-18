using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class RotateObject : MonoBehaviour
{
    [SerializeField] private float duration;
    [SerializeField] private float angle;
    [SerializeField] private float originAngle;
    private int flagIndex = 1;
  

    private void Start()
    {
        Rotate();
    }

    private void Rotate()
    {
        var angleRotate = angle;
        if (flagIndex == 1)
        {
        }
        else
        {
            angleRotate = originAngle;
        }

        transform.DORotate(new Vector3(0, 0, angleRotate), duration).SetEase(Ease.Linear).OnComplete(() =>
        {
            flagIndex *= -1;
            Rotate();
        });
    }
}