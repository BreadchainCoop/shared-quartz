---
Owner: TBS
Last edited time: 2025-01-06T11:12
Created time: 2024-06-27T03:42
share: true
---
[[Voting Power LP Vaults]]

In the Breadchain governance smart contracts, ==**voting power accumulation is based on the user's amount of BREAD per block.**==

While participating in governance votes, a user’s voting power is accounted for with a delay. This is done to prevent denial of service attacks. As demonstrated here, a voter’s cumulative voting power gained during January can be used to vote in February.

  

[![](https://lh7-us.googleusercontent.com/docsz/AD_4nXfU5ZmnPtZRglIUBi_JQ-pFFxgNz7yUrY4kPrhVBWAuY5646ushADtt7jjcQ25ILX6LmFLAVeeFlMpb6GpG1Mm1eE6gORsNXx_jdgEHR9qWU_vA-qUPyfw4AoQrl-DiMyVjOWfWtQ-Uez7rU_wyEXSvkoU-?key=ZIhDAveICYailu_XaidS4A)](https://lh7-us.googleusercontent.com/docsz/AD_4nXfU5ZmnPtZRglIUBi_JQ-pFFxgNz7yUrY4kPrhVBWAuY5646ushADtt7jjcQ25ILX6LmFLAVeeFlMpb6GpG1Mm1eE6gORsNXx_jdgEHR9qWU_vA-qUPyfw4AoQrl-DiMyVjOWfWtQ-Uez7rU_wyEXSvkoU-?key=ZIhDAveICYailu_XaidS4A)

By the end of the month, the number that represents voting power will be very large and is difficult to show to users. For example if a user holds 1000 BREAD the whole month and about 500k blocks pass in a month (with 5 second block times in Gnosis Chain), then the raw VP would be 500,000,000 which is a large number just for holding 1000 BREAD.

[![](https://lh7-us.googleusercontent.com/docsz/AD_4nXddz5bPeXpWegj4r9Xwe499HTNN0_979qHrottFFAsn0gveuCKbCHfOUF3CXZNMtUUVopT_gOaUPv8T-1cJzwcHZiBSE2TWQ9drCpvBg-LelHPUO6bDqtQ1S6nDzhQUAsVaOYwVwM-FUu1FbUw6j1Of81Sf?key=ZIhDAveICYailu_XaidS4A)](https://lh7-us.googleusercontent.com/docsz/AD_4nXddz5bPeXpWegj4r9Xwe499HTNN0_979qHrottFFAsn0gveuCKbCHfOUF3CXZNMtUUVopT_gOaUPv8T-1cJzwcHZiBSE2TWQ9drCpvBg-LelHPUO6bDqtQ1S6nDzhQUAsVaOYwVwM-FUu1FbUw6j1Of81Sf?key=ZIhDAveICYailu_XaidS4A)

So in order to simplify this for the user to understand what their voting power is, ==**an easy way to make it understandable is to show the average amount of BREAD held over the previous month as their quantified voting power**==. To find this we divide the raw accumulated voting power by the number of blocks that were included in the last month period. Therefore all accounts are being divided by the same number and it comes out to be one that is more legible for all users.

![[Untitled.webp]]

> [!important] Remember that the vote you submit only affects 50% of the yield disbursement decision as the other 50% is split evenly among all of the projects.
> 
> [[Yield Governance]]

## Examples / Scenarios

1. User holds 100 BREAD over the entirety of the previous month, not moving any of the BREAD
    1. VP = 100
2. User holds 100 BREAD for the first half of the month and then adds 100 more BREAD in the second half of the month
    1. VP = 150
3. User holds 100 BREAD one-third of the month, then spends 50 BREAD holds this for the second third, and then mints BREAD so they are holding 500 BREAD for the last third
    1. VP = 216.67
4. User was holding 100 BREAD the full previous month and then burned all of it at the start of the current month
    1. VP = 100
5. User was a BREAD holder in the past but burned all of their BREAD over a month ago
    1. VP = 0