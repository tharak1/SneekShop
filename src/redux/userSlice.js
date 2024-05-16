import { Login } from "@mui/icons-material";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { firestore } from "../config/firebase";

export const addAddress = createAsyncThunk('user/addAddress', async ({ addressData, userId }) => {
  console.log("HHHHHHHHHHHHHHHHHHHHHIIIIIIIIIIIIIIIIIIIIIIII");
  const docRef = doc(firestore, "users", userId);
  const docSnap = await getDoc(docRef);

  let userData = null;

  if (docSnap.exists()) {
      let arr = docSnap.data().Address;

      arr.push(addressData);

      await setDoc(docRef, { Address: arr }, { merge: true });

      const updatedDocSnap = await getDoc(docRef);
      if (updatedDocSnap.exists()) {
          userData = updatedDocSnap.data();
          console.log("Updated userData:", userData);
      } else {
          console.log("No such document after update!");
      }

  } else {
      console.log("No such document!");
  }
  return addressData;
});





export const userSlice = createSlice({


    name:"user",
    initialState:{
        user:null,
        status: "idle",
        error: null,
    },
    reducers:{
        LoginUser:(state,action)=>{
            state.user = action.payload;
        },
        LogoutUser:(state)=>{
            state.user = null;
        }
    },
    extraReducers:(builder)=>{
        builder    
          .addCase(addAddress.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(addAddress.fulfilled,(state,action)=>{
            state.status = 'succeeded';
            console.log(action.payload);
            state.user.userData.Address.push(action.payload);
          })
          .addCase(addAddress.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          })
    }

});

export const {LoginUser , LogoutUser} = userSlice.actions;

export const setUser = (state)=>state.user.user;

export default userSlice.reducer;





// import 'package:crystal_navigation_bar/crystal_navigation_bar.dart';
// import 'package:flutter/material.dart';
// import 'package:new_prism/screens/student_screens/home_screen.dart';
// import 'package:new_prism/screens/student_screens/test.dart';

// class Navbar1 extends StatefulWidget {
//   const Navbar1({super.key});

//   @override
//   State<Navbar1> createState() => _Navbar1State();
// }

// class _Navbar1State extends State<Navbar1> {
//   int _selectedTab = 0;

//   void _handleIndexChanged(int i) {
//     setState(() {
//       _selectedTab = i;
//     });
//   }

//   final screens = [
//     const Homescreen(),
//     const Test(),
//     const Test(),
//     const Test()
//   ];

//   @override
//   Widget build(BuildContext context) {
//     final items = [
//       CrystalNavigationBarItem(
//           icon: 'assets/icons/home_fill.png',
//           unselectedIcon: 'assets/icons/home.png',
//           // selectedColor: const Color.fromARGB(255, 255, 255, 255),
//           selectedColor: Theme.of(context).colorScheme.onSurface,
//           unselectedColor: Theme.of(context).colorScheme.onSurface),
//       CrystalNavigationBarItem(
//           icon: 'assets/icons/events_fill.png',
//           unselectedIcon: 'assets/icons/events.png',
//           // selectedColor: const Color.fromARGB(255, 255, 255, 255),
//           selectedColor: Theme.of(context).colorScheme.onSurface,
//           unselectedColor: Theme.of(context).colorScheme.onSurface),
//       CrystalNavigationBarItem(
//           icon: 'assets/icons/book_fill.png',
//           unselectedIcon: 'assets/icons/book.png',
//           // selectedColor: Colors.white
//           selectedColor: Theme.of(context).colorScheme.onSurface,
//           unselectedColor: Theme.of(context).colorScheme.onSurface),
//       CrystalNavigationBarItem(
//           icon: 'assets/icons/setting_fill.png',
//           unselectedIcon: 'assets/icons/setting.png',
//           // selectedColor: Colors.white,
//           selectedColor: Theme.of(context).colorScheme.onSurface,
//           unselectedColor: Theme.of(context).colorScheme.onSurface),
//     ];
//     return Scaffold(
//       extendBody: true,
//       body: screens[_selectedTab],
//       bottomNavigationBar: Padding(
//         padding: const EdgeInsets.only(bottom: 2),
//         child: CrystalNavigationBar(
//           currentIndex: _selectedTab,
//           marginR: const EdgeInsets.symmetric(horizontal: 20, vertical: 20),
//           paddingR: const EdgeInsets.symmetric(horizontal: 10, vertical: 0),
//           height: 10,
//           borderRadius: 18,
//           indicatorColor: Theme.of(context).colorScheme.secondary,
//           unselectedItemColor: Colors.white70,
//           backgroundColor: Theme.of(context).colorScheme.surface,
//           onTap: _handleIndexChanged,
//           items: items,
//         ),
//       ),
//     );
//   }
// }
