class Collection{
    constructor(items){
        this.items = items || [];
    }
    addItem(item){
        const key = Math.random()
        .toString(36)
        .substr(2, 9);
        this.items.push({key,...item});
    }
    // updateItem(id,updateInfo){
    //     this._items.find((el) => {
    //         el._id === id ? return
    //     });
    // }
}
export default Collection