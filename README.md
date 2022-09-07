# Arweave Classifieds

Arweave Classifieds is a permaweb dapp for uploading, searching for, and contacting post authors about their classifieds posting. 
  Think craigslist on arweave.

Users can post about anything they like and view listings in community managed categories. Categories can be added at any time by any user so long
  as the category is not blacklisted in the DAO's contract. Categories can be removed from the blacklist as well.

Content moderation is voted on with a DAO structure for adding and removing listings/categories, and members of the DAO can earn PST tokens for performing 
  actions in this regard. Owners of a post can change the post to active/inactive with a new transaction for the posts manifest. Other classifieds apps
  will be able to link into this tagging structure to display classifieds posting on their app as well.
  
For communication between buyers/sellers, a forum thread will be attached to each posting where people can post messages under the ad (like facebook
  marketplace).
  
Post moderation will be somewhat community controlled. If a user thinks a post is in the wrong category they can upvote or downvote the post and select
  which category they think the post should be in. If the posting enters a negative vote percentage (based on total views of the listing) then the system
  will calculate the highest voted category for the listing, and place it there. If no category has a highest approval rating, the original set by the 
  author is used.
  
## Geographic Organization - Regions and sub-regions

An important part of any classifieds ad is keeping it relevant to the location of the item or service being traded. Users can add a GPS location which
  the app will take and automatically place it in an existing region if that region exists, if the region does not exist yet users can add it and earn 
  PST's for doing so. The process for this will be submitting gps data to mark the borders of said region. Once data is submitted it is registered on 
  the network as a new region and a job order is added to the dao's todo list. Dao members can earn PST's for verifying that the region is correct (for
  example, ensuring new york city is in the new york state region).
  
## Smart listings 

  A smart listing is a smartcontract deployed to act as payment mediation between buyer, seller, and broker(s). Users can apply to be a broker
  for a listing. A brokers job is to find a buyer or a seller to fullfill the contract's function, which is to transfer ownership of the product or     service.
  The author of the listing can set weather or not the listing needs a broker, and if so set the brokers commision. Once an author accepts someone as a
  broker, or multiple brokers, the contract is updated for each broker(s) deal. If the broker finds a party who is interested, they must update the contract. To ensure the protection of both brokers and brokers' clients, the method in which a broker brings in a client is as follows: 
  the broker takes the listings data and shares it with a prospective client as an "offer". The client does not have access to any of the information in 
  the listing other than the details of the product. If the client wants to agree to the listing, they sign the offer with their wallet, and the broker 
  submits the signed data to the contract as a client. This ensures that 1) the client is willingly engaging in the offer and that 2) the broker was the 
  one to retain the client by virtue of the transaction being submitted by their wallet.
  
## Local Crypto Trading

  An important part of what will make or break this platform is the Smart listings - which require crypto to operate. As such the ability for users
  to interact 
  
##PST Tokenomics

  At this point you are probably wondering.... why do people want these PST's? The answer, is they have value. The value for these PST's comes from the
  treasury, and the treasury is funded by other dapps paying for access to the curated data. This dapp keeps track of payments via the smart listings,
  human-verified and agreed upon geographic borders which are important for commerce and travel, and the flow of currency via the local crypto trading.

