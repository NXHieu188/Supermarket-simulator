using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LookAtTarget : MonoBehaviour
{
    public Transform target;
    public float speed;
    public float rotationModifier;

    public void UpdateFunc()
    {
        //transform.right = target.position - transform.position;
        //2D
        // if (target != null)
        // {
        //     Vector3 vectorToTarget = target.transform.position - transform.position;
        //     float angle = Mathf.Atan2(vectorToTarget.y, vectorToTarget.x) * Mathf.Rad2Deg - rotationModifier;
        //     Quaternion q = Quaternion.AngleAxis(angle, Vector3.forward);
        //     transform.rotation = Quaternion.Slerp(transform.rotation, q, Time.deltaTime * speed);
        // }
        //3D
        Vector3 direction = transform.position - target.position;
        Quaternion rotation = Quaternion.LookRotation(direction);
        transform.rotation = Quaternion.Lerp(transform.rotation, rotation,
            speed * Time.deltaTime);
    }
}