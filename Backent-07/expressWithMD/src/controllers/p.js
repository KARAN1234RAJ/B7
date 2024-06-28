const getAllProd =(req, res) => {
       Product.find()
         .then((data) => {
           res.json({ status: "success", total: data.length, result: data });
         })
         .catch((err) => {
           res.json({ status: "failed", error: err.message });
         });
     }