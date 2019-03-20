class Collection{
    constructor(items){
        this.items = items || [];
    }
    addItem(item){
        this.items.push(item);
    }
    // updateItem(id,updateInfo){
    //     this._items.find((el) => {
    //         el._id === id ? return
    //     });
    // }
}
export default Collection