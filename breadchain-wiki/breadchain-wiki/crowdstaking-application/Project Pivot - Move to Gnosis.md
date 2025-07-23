---
Owner: TBS
Last edited time: 2024-01-30T01:40
Created time: 2024-01-27T05:55
share: "true"
---
# Summary

At the moment, the [Breadchain Crowdstaking Application](https://app.breadchain.xyz/) is deployed on the Polygon POS blockchain generating yield from users giving DAI to be lended out on Aave. At the same time, we are hard at work at developing a new front end for the application, a brand redesign, and the BREAD dashboard. Ari (Arrakis CTO and smart contract developer for the current app) has proposed that we move the application to Gnosis in order to take advantage of the DAI savings rate token (sxDAI) on Gnosis to receive a **higher yield** (guaranteed 5% but likely more) on our collateral through [Agave](https://agave.finance/sdai/). In addition there are potential benefits to moving to Gnosis including the fact that the app would then **only require one token** by the user (xDAI) in order for it to be usable, making it more user friendly. As well, Gnosis is soon to launch [Gnosis Pay](https://gnosispay.com/) which will allow people to be able to **spend their crypto through a normal debit card** connected to a Safe wallet. This would allow people to be able to spend their BREAD on normal purchases. This pivot seems to make a lot of sense from both an economic, technical, and utility standpoint. However this means that we need to manage the move to a new chain. We propose to move most of the collateral from Polygon to Gnosis and airdrop the new BREAD on Gnosis to the current holders during a live streamed event in order to be transparent about the process and coincide with the other developments.

# Change Management

This shift means that there will need to be planning around how we would introduce this change. We identified three possible options:

1. Two parallel apps
    1. Have two apps, one on Polygon and one on Gnosis
2. Refund all DAI on Polygon (Shut down Polygon app)
    1. Give back all of the DAI in collateral to current holders of BREAD
3. Airdrop new BREAD on Gnosis (Shut down Polygon app)
    1. Move all of the collateral to Gnosis currently in the Polygon smart contracts

**We feel that Option 3 is the most ideal.** In this way we would not lose all of the collateral currently staked to generate yield and would reduce the complexity for the user so that they don’t need to burn on Polygon and mint on Gnosis. This does mean that we must manage the process of moving from Polygon to Gnosis.

## Process

Here is our step by step proposal for managing that change.

1. Create fully functional crowdstaking application on Gnosis.
2. Prepare the transactions on Polygon necessary for the update.
3. Share with the Comrades multisig group that owns the update function on Polygon about this change.
4. Initiate transactions with the approval of the multisig (Livestream)
    1. Turn off baking and burning functions of the Polygon smart contract
    2. Pull out all collateral and generated yield in DAI
    3. Return DAI to all multisigs holding BREAD (less than $120 worth)
    4. Bridge DAI to Gnosis
    5. Bake BREAD on Gnosis with the xDAI
    6. Airdrop new Gnosis BREAD based on current Polygon holders

By following these steps, **we should be able to avoid any issues with the transition and anybody losing any money**. Additionally, we could airdrop a small amount of xDAI to each of the holders so that when they see their BREAD on Gnosis, they will have some xDAI to make other transactions on Gnosis from the start. Transactions on Gnosis are usually a fraction of a penny.

# How does the new app work?

While the main outcomes of the app and **functionality for the user will largely stay the same** there are some small changes. The first is that users will no longer need to approve a contract like now. Since xDAI is the native token on Gnosis, users can simply use that token to create BREAD. Besides that, basically everything else is the same for the user.

Under the hood we will be taking advantage of the recent change of Maker’s protocol around DAI with the creation of the DAI savings rate sDAI and Gnosis’ use of DAI bridged from the Ethereum mainnet into xDAI now becoming sDAI which is generating a guaranteed yield.

[![](https://lh7-us.googleusercontent.com/mzDegkt2IWMj0f8OACYm78MMK0lV5Zz5iYO9gYRWgw0tih5G-kdAsiHAzqtr7uH7fH2Wxian9UcpMfYmzlMroyXz--JehkIFFoJwKoggodadZg7ZRej_QeyoE9vF_ifdh2XhO1rvmKsx_eVwQL9iHvE)](https://lh7-us.googleusercontent.com/mzDegkt2IWMj0f8OACYm78MMK0lV5Zz5iYO9gYRWgw0tih5G-kdAsiHAzqtr7uH7fH2Wxian9UcpMfYmzlMroyXz--JehkIFFoJwKoggodadZg7ZRej_QeyoE9vF_ifdh2XhO1rvmKsx_eVwQL9iHvE)

So how is this yield being generated?

## DAI Savings Rate (DSR)

Maker created the DSR which is a guaranteed interest rate at which holders of sDAI earn based on their revenue from DAI vault owners paying interest and vault liquidations. It is essentially a revenue sharing scheme that promotes stability within the Maker protocol.

From [Maker’s blog](https://blog.makerdao.com/dai-savings-rate/) on DSR:

“The DSR is funded out of the Stability Fees paid by CDPs in Maker DAO. For example, if the average Stability Fees collected on CDPs is 3%, it could be used to fund a DSR of 2%.

The DSR helps balance supply and demand of Dai and is one of the monetary policy levers that Maker Governance can control.

It is a global parameter that needs to be adjusted often to deal with short-term changes in market conditions of the Dai economy. This is in contrast to Risk Governance, which is a long-term process that involves setting Stability Fees, and other risk parameters individually for each collateral type.

Together, these two mechanics provide a set of tools to guard Dai stability both in the short-term and long-term.”

## Yield from Agave

Gnosis Chain uses xDAI as its native currency which comes from DAI that is bridged from the Ethereum main net. Recently they decided to turn most of the DAI in the bridge contract into sDAI which would thus generate yield.

[![](https://lh7-us.googleusercontent.com/uko6oZbxtmVWqgE_UItGCAXKXlF4iT_-narfFLTCTYaVHsp3IIQy8T5dcin_iclG2rPS9lKSxX9noFmeI7_YWcdDi_bbzEB-HT2r-R3bMNmI3q8CDbjF-4mWu60-N0bQJC9LJr-UEWWjkwY9BTHLKEY)](https://lh7-us.googleusercontent.com/uko6oZbxtmVWqgE_UItGCAXKXlF4iT_-narfFLTCTYaVHsp3IIQy8T5dcin_iclG2rPS9lKSxX9noFmeI7_YWcdDi_bbzEB-HT2r-R3bMNmI3q8CDbjF-4mWu60-N0bQJC9LJr-UEWWjkwY9BTHLKEY)

[Agave](https://agave.finance/sdai/) was created to share the revenues from the sDAI on the Ethereum main net with users on Gnosis. With Agave, users can turn their xDAI into sxDAI which gives them a portion of the revenue generated. This is a scheme to also bring more users to Gnosis because the yield generated into Gnosis doesn’t have the equivalent number on the main net. Assuming the amount of sxDAI minted is lower than the one held by the bridge, then the yield will be higher than the Dai savings Rate. The expectation is that the sxDAI rate will always be higher on Gnosis than mainnet, as only if almost 100% of all DAI bridged is staked will there be rate parity.

So while 5% may be guaranteed by Maker, we are always going to make more than 5% on sxDAI by using it as collateral for the Crowdstaking Application.

[![](https://lh7-us.googleusercontent.com/4g53mIeeQ424JFS6_Hfpkn-TkxHsw7XtBpweLRHukBvvRvrDMvuPHDIRC1RbIqcXWuXFuE66J9M8JvfNNOKsxUnNPI9FeWDEL7NxsmIsbN-2MRjawj3ERLrbOExa4rKnAi9oVO7UT3mByu5rD155_pA)](https://lh7-us.googleusercontent.com/4g53mIeeQ424JFS6_Hfpkn-TkxHsw7XtBpweLRHukBvvRvrDMvuPHDIRC1RbIqcXWuXFuE66J9M8JvfNNOKsxUnNPI9FeWDEL7NxsmIsbN-2MRjawj3ERLrbOExa4rKnAi9oVO7UT3mByu5rD155_pA)