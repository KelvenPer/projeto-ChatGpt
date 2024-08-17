const { Configuration, OpenAIApi } = require("openai");

module.exports = class openai{
    static configuration(){
        const configuration = new Configuration({
            apiKey: process.env.OPEN_API_KEY,
        });

        return new OpenAIApi(configuration)
    }

    static textCompletion({prompt}){
        return{
            model:"text-davince-003",
            prompt:`${prompt}`,
            temperature:0,
            max_token:3500,
            top_p:1,
            frequency_penalty:0,
            presence_penalty:0,
        }
    }
}
