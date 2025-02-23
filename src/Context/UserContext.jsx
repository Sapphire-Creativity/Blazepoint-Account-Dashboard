import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../Components/Firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	// Function to fetch user details
	const fetchUserData = async (uid) => {
		try {
			const userDoc = await getDoc(doc(db, "Users", uid));
			if (userDoc.exists()) {
				setUser({ id: uid, ...userDoc.data() });
			}
		} catch (error) {
			console.error("Error fetching user data:", error);
		}
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
			if (currentUser) {
				await fetchUserData(currentUser.uid);
			} else {
				setUser(null);
			}
			setLoading(false);
		});

		return () => unsubscribe();
	}, []);

	return (
		<UserContext.Provider value={{ user, loading, fetchUserData }}>
			{children}
		</UserContext.Provider>
	);
};

export const useUser = () => useContext(UserContext);
