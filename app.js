const express=requiure('express');
const bodyparser=requiure('bodyparser');
const app=express();
app.set('view engine','ejs');
app.set('views','views');
const adminRoutes=require('./routers/admin');
const shopRoutes=requiure('./routers/shop');
app.use(bodyparser.urlencoded ({extends:flase}));
app.use(express.static(path.))
app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use((req,res,next)=>{
    res.status(404).render('404',{pageTitle:'page not found'});
})