# hooktensor
A Nodejs service to watch the bittensor network for new registrations.

## Setup and Install
Clone the repo  
`git clone https://github.com/opentensor/hooktensor.git`  
Install the package dependencies  
`cd hooktensor && yarn install`    
Run the build  
`yarn build`    
### Start the watcher
`yarn start watch --webhook_url https://discord.com/{channel_id}/{token} -u <ws://subtensor_enpoint:9944>`