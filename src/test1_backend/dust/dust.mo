// import Principal "mo:base/Principal";
// import Text "mo:base/Text";
// import Nat "mo:base/Nat";

// type Dust = {
//     title : Text;
//     content : Text;
//     id : Nat;
// };

// // Define the Storable trait for Dust
// public type DustStorable = {
//     to_bytes : () -> [ArrayBuffer];
//     from_bytes : [ArrayBuffer] -> DustStorable;
// };

// // Implement the Storable trait for Dust
// public func encodeDust(dust : Dust) : [ArrayBuffer] {
//     encodeText(dust.title) # encodeText(dust.content) # encodeNat(dust.id);
// };

// public func decodeDust(bytes : [ArrayBuffer]) : Dust {
//     let (title, rest) = decodeText(bytes);
//     let (content, rest') = decodeText(rest);
//     let (id, _) = decodeNat(rest');
//     { title = title; content = content; id = id; };
// };

// // Define the BoundedStorable trait for Dust
// public type DustBoundedStorable = {
//     MAX_SIZE : Nat;
//     IS_FIXED_SIZE : Bool;
// };

// // Implement the BoundedStorable trait for Dust
// public func dustBoundedStorable() : DustBoundedStorable {
//     { MAX_SIZE = 102400; IS_FIXED_SIZE = false; };
// };
