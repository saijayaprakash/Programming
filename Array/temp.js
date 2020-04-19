const root = {
    a: 'n1',
    b: [
        {
            c: 'n2',
            b: [{ node: 'n3', childrens: [] }]
        },
        {
            node: 'n4',
            childrens: [
                { node: 'n5', childrens: [{ node: 'n7', childrens: [] }] },
                { node: 'n6', childrens: [] }
            ]
        }
    ],
    f: 'extraProp'
};

var x = function(obj){
    let keys = Object.keys(obj);
    for(let i=0;i<keys.length;i++){
        if(Array.isArray(obj[keys[i]])){
            let tempArr = obj[keys[i]];
            for(let j=0;j<tempArr.length;j++){
                x(tempArr[j]);
            }
        }
        else{
            console.log(obj[keys[i]]);
        }
    }
    return;
}
x(root);