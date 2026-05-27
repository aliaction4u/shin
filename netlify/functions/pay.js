exports.handler = async function(event) {
    try {
        const body = JSON.parse(event.body);
        const food = body.food;
        const amount = body.amount;
        const response = await fetch(
            "https://api.shegerpay.com/api/v1/checkout",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer sk_live_z-BcbvB8sXSI9AZIZBODerUdf1AF1Jc"
                },
                body: JSON.stringify({
                    amount: amount,
                    currency: "ETB",
                    description: food
                })
            }
        );
        const text= await response.text();
        console.log(text);
        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                response: text
            })
        };
    } catch(error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: error.message

            })

        };

    }

}
