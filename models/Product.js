var keystone = require('keystone');
var Types = keystone.Field.Types;

var Product = new keystone.List('Product', {
    map: {name: 'title'},
    singluar:'Product',
    plural:'Products',
    autokey: {path: 'slug', from: 'title', unique: true}
});

Product.add({
    title: {type: String, required: true},
    price: {type: Number},
    qty: {type: Number},
    description: {type: Types.Html, wysiswyg: true, height:300},
    shortdesc: {type: Types.Html, wysiswyg: true, height:300},
    image: {type: Types.CloudinaryImage},
    publishedDate: {type: Date, default: Date.now}
});

Product.register();