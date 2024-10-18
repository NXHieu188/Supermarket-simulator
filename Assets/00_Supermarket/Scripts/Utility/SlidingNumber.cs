using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
public class SlidingNumber : MonoBehaviour
{
    public float animationTime = 1; // The duration
    float desiredNumber; // The calculated result
    public float initialNumber;
    float currentNumber; // The current value 
    public Text txtBrain;
    private void Start()
    {
        currentNumber = initialNumber;
        desiredNumber = currentNumber;
        txtBrain.text = currentNumber.ToString();
    }
    public void AddToNumber(float value) // Change the Health
    {
        initialNumber = currentNumber;
        desiredNumber += value;
    }

    private void Update()
    {
        if (currentNumber != desiredNumber) // Create the sliding process
        {
            if (initialNumber < desiredNumber)
            {
                currentNumber += (animationTime * Time.deltaTime) * (desiredNumber - initialNumber);
                if (currentNumber >= desiredNumber)
                {
                    currentNumber = desiredNumber;
                }
            }
            else
            {
                currentNumber -= (animationTime * Time.deltaTime) * (initialNumber - desiredNumber);
                if (currentNumber <= desiredNumber)
                {
                    currentNumber = desiredNumber;
                }
            }
            txtBrain.text = currentNumber.ToString();
        }
    }
}
