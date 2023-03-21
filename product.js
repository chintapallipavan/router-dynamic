const fs=require('fs');
const path=require('path');
module.exports=class product{
    constructor(t){
        this.title=t;
    }

    save(){
        const p=path.join{
            path.dirname(process.mainModule.filename),
            'data',
           'products.json',
        };
        fs.readFile(p,(err,fileContent))=>{
            let product=[];
            if(!err){
                products=JSON.parse(fileContent);

                }
                products.push(this);
            });
        }
    }


    
