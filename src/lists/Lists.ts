
/**
 * Filters an array of strings
 * @param initialList 
 * @param length 
 */
export const filterByLengthGE = (initialList : Array<string>, length : number) : Array<string>  => {
   return initialList.filter((word) => word.length >= length )
}
