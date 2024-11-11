using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DefineHelper
{
    public const string Movement = "Movement";
    public const string Rotate = "Rotate";
}

public class NameTag
{
    public const string Player = "Player";
}

public enum EventID
{
    AvailableToBuyProduct,
}

public enum TypeProduct
{
    chips,
    cafe,
    chocolatespread,
    milk,
    candy,
    cake,
    cheese,
    pasta,
    rice,
}
public enum TypeProductPetShop
{
    PetInstantFood,
    DaveShampoo,
    FreshMilk,
    PartyMix,
    SalmonPate,
    PetMultivitamins,
    RedBowl,
    BlueBowl,
    ChickenBeast,
}
public enum TypeCheckOut
{
    CARD,
    CASH,
}
public enum TypeButton
{
    GIVE_CASH = 0,
    GIVE_COIN = 1,
    CLICK_BUTTON = 2,
    OK = 3,
}
public enum TypeMoney
{
    USD,
    C,
    RESET,
    OK,
}
public enum TypePad
{
    NUM_0,
    NUM_1,
    NUM_2,
    NUM_3,
    NUM_4,
    NUM_5,
    NUM_6,
    NUM_7,
    NUM_8,
    NUM_9,
    C,
    OK,
    DELETE,
    NUM_,
}