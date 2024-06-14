// import Principal "mo:base/Principal";
// import Text "mo:base/Text";
// import Nat "mo:base/Nat";

// type User = {
//     principal : Principal;
//     name : ?Text;
//     id : Nat;
// };

// // Define the Storable trait for User
// public type UserStorable = {
//     to_bytes : () -> [ArrayBuffer];
//     from_bytes : [ArrayBuffer] -> UserStorable;
// };

// // Implement the Storable trait for User
// public func encodeUser(user : User) : [ArrayBuffer] {
//     encodePrincipal(user.principal) # encodeOptionalText(user.name) # encodeNat(user.id);
// };

// public func decodeUser(bytes : [ArrayBuffer]) : User {
//     let principal = decodePrincipal(bytes);
//     let (name, rest) = decodeOptionalText(bytes);
//     let (id, _) = decodeNat(rest);
//     { principal = principal; name = name; id = id; };
// };

// // Define the BoundedStorable trait for User
// public type UserBoundedStorable = {
//     MAX_SIZE : Nat;
//     IS_FIXED_SIZE : Bool;
// };

// // Implement the BoundedStorable trait for User
// public func userBoundedStorable() : UserBoundedStorable {
//     { MAX_SIZE = 1024; IS_FIXED_SIZE = false; };
// };
