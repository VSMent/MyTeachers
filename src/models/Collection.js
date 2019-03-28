class Collection{
    constructor(items){
        this.items = items || [];
    }
    addItem(item){
        const key = Math.random()
        .toString(36)
        .substr(2, 9);
        const id = Math.random()
        .toString(36)
        .substr(2, 9);
        this.items.push({id, key,...item});
    }
    deleteItem(id){
        this.items = this.items.filter((el)=>{
            return el.id !== id;
        });
    }
    // updateItem(id,updateInfo){
    //     this._items.find((el) => {
    //         el._id === id ? return
    //     });
    // }
}
export default Collection