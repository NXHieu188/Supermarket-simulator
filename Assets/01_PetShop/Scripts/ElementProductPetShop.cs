using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ElementProductPetShop : MonoBehaviour
{
    public TypeProductPetShop typeProduct;
    public Image icon;
    public Text productName;
    public Text companyName;
    public Text unitPrice;
    public Text quanity;
    public Text txtTotalPrice;
    private float price;
    private float totalPrice;
    public Sprite btnOn, btnOff;
    public Image btnBuy;
    private bool isAvailable;
    private int currentPack;
    public Button btnSub, btnAdd;
    private float priceOnePack = 0;
    private void OnEnable()
    {
        EventDispatcher.Instance.RegisterListener(EventID.AvailableToBuyProduct, (param) => { CheckAvailable(); });
    }
    private void OnDisable()
    {
        EventDispatcher.Instance.RemoveListener(EventID.AvailableToBuyProduct, (param) => { CheckAvailable(); });
    }
    public void Init(ProductPetShop product)
    {
        icon.sprite = product.icon;
        icon.SetNativeSize();
        productName.text = product.productName;
        companyName.text = product.companyName;
        unitPrice.text = "$" + product.unitPrice.ToString();
        price = product.unitPrice;
        priceOnePack = price * 15;
        totalPrice = priceOnePack;
        txtTotalPrice.text = "$" + totalPrice.ToString();
        currentPack = 1;
        CheckAvailable();
    }
    public void ClickSub()
    {
        currentPack -= 1;
        if (currentPack <= 0)
            currentPack = 0;
        quanity.text = currentPack.ToString();
        totalPrice = priceOnePack * currentPack;
        txtTotalPrice.text = "$" + totalPrice.ToString();
        CheckAvailable();
        GameManagerPetShop2.Instance.ActionGuide();
        AudioManager.Instance.PlaySoundClipClick();
    }
    public void ClickAdd()
    {
        currentPack += 1;
        quanity.text = currentPack.ToString();
        totalPrice = priceOnePack * currentPack;
        txtTotalPrice.text = "$" + totalPrice.ToString();
        CheckAvailable();
        GameManagerPetShop2.Instance.ActionGuide();
        AudioManager.Instance.PlaySoundClipClick();
    }
    public void ClickBuy()
    {
        if (isAvailable)
        {
            GameManagerPetShop2.Instance.CaculatorMoney(totalPrice, typeProduct);
            IsAvailableToBuy();
        }
        GameManagerPetShop2.Instance.ActionGuide();
        AudioManager.Instance.PlaySoundClipClick();
    }
    void CheckAvailable()
    {
        if (GameManagerPetShop2.Instance.totalMoney >= totalPrice)
        {
            btnBuy.sprite = btnOn;
            isAvailable = true;
        }
        else
        {
            btnBuy.sprite = btnOff;
            isAvailable = false;
        }
        if (currentPack == 0)
        {
            btnBuy.sprite = btnOff;
            isAvailable = false;
        }
    }
    void IsAvailableToBuy()
    {
        EventDispatcher.Instance.PostEvent(EventID.AvailableToBuyProduct);
    }
}
