welcome to RoboYuntow, a thing which does stuff for twitch streamer Yuntow's chat.

Installation instructions:

    1. Install prerequisite programs:
        A. Node.js
        B. Git bash
        C. (some database, no use yet but I'd like to add something. don't bother right now.)

    2. On the github repo, click "Clone or download", then copy the link.

    3. open Git bash, then type "git clone [shift+ins to paste the link]"
        this will create a 'repo' on your pc, to which the code will be downloaded.

    4. Type "cd RoboYuntow"

    5. Type "npm i axios tmi.js dotenv"
       this installs some stuff that the bot needs to run

    6. Type "touch .env", then message me to get the stuff you'll need for this (I can't upload this because it has sensitive info in it)

    7. That oughta be all you need to create, you can now type "node roboYuntow.js" to start the program.

    8. Each time I post an update, you'll have to fetch the new code by cd-ing into the repo, then typing "git pull"
            
