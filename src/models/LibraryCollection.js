import {LibraryItem} from "@/models/LibraryItems";

export default function LibraryCollection(){
    let arr = [];

    arr.addItem = function (item){
        this.push(new LibraryItem(item, (collection =>
                    function(){
                        collection.removeItem(this);
                    }
            )(this)
        ));
    }

    arr.removeItem = function (item){
        this.splice(this.indexOf(item), 1);

        return this;
    }

    return arr;
}