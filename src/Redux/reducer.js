// Actions

const SETPROFILENAME = "SETPROFILENAME";
const SETPROFILESURNAME = "SETPROFILESURNAME";
const SETPROFILEPHONE = "SETPROFILEPHONE";
const SETPROFILEEMAIL = "SETPROFILEEMAIL";
const SETPROFILEBIO = "SETPROFILEBIO";
const SETPROFILEIMAGE = "SETPROFILEIMAGE";
const SETLISTINGIMAGE = "SETLISTINGIMAGE";

// Action creators

export const setprofilename = (name) => {
	return { type: SETPROFILENAME, payload: name };
};
export const setprofilesurname = (surname) => {
	return { type: SETPROFILESURNAME, payload: surname };
};
export const setprofilephone = (phone) => {
	return { type: SETPROFILEPHONE, payload: phone };
};
export const setprofileemail = (email) => {
	return { type: SETPROFILEEMAIL, payload: email };
};
export const setprofilebio = (bio) => {
	return { type: SETPROFILEBIO, payload: bio };
};
export const setprofileimage = (image) => {
	return { type: SETPROFILEIMAGE, payload: image };
};

export const setlistingimage = (listingImage) => {
	return { type: SETLISTINGIMAGE, payload: listingImage };
};

// Initial state
const initialState = {
	name: "",
	surname: "",
	phone: "",
	email: "",
	bio: "",
	image: ".//",
	listingImage: null,
};

// Root reducer
const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case SETPROFILENAME:
			return { ...state, name: (state.name = action.payload) };
		case SETPROFILESURNAME:
			return { ...state, surname: (state.surname = action.payload) };
		case SETPROFILEPHONE:
			return { ...state, phone: (state.phone = action.payload) };
		case SETPROFILEEMAIL:
			return { ...state, email: (state.email = action.payload) };
		case SETPROFILEBIO:
			return { ...state, bio: (state.bio = action.payload) };
		case SETPROFILEIMAGE:
			return { ...state, image: (state.image = action.payload) };

		case SETLISTINGIMAGE:
			return { ...state, listingImage: (state.listingImage = action.payload) };

		default:
			return state;
	}
};

export default profileReducer;
