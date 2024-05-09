 async function logDelayesmessage(message,delayMs){
    await new Promise((resolve) =>
    setTimeout(resolve,delayMs));
    console.log(message)
}
logDelayesmessage("hello world",1000)

async function getUserData(userId){
    for(const  Id of userId){
        try{

            const userData = await getUserData(userId);
            console.log(`User data for ID ${userId} user Data`);
        }
        catch(error){
            console.log(`Error getting data for Ic ${userId}`)
        }
    }
}
const userId = [1,2,3]
getUserData(userId)

async function performTaskTask(){
    try{
        await performTask();
        console.log("Task completed successfully")
    }
    catch(error){
        console.error("Error encountered during task",error);
    }
}
performTaskTask("authenticate")

function unstableTask(taskName,failureProbability){
    return new Promise ((resolve,reject) =>{
        const randomValue = math.ranndom();
        if(randomValue > failureProbability){
            resolve(`${taskName} completed successfully`);
        }else{ 
            reject(`failed ${taskName}`)
        }
    })
}

unstableTask("terminate",2)