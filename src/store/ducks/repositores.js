

export const Types = {
    LISTREPOS__ADD: "repositores/ListRepos__Add",
    LISTREPOS__DELETE: "repositores/ListRepos__Delete",
    LISTREPOS__REFRESH: "repositores/ListRepos__Refresh",
    LISTREPOS__SUBMIT: "repositores/ListRepos__Submit",
    LISTREPOS__CLEAR: "repositores/ListRepos__Clear",
    LISTREPOS__SUBMITREFRESH: "repositores/ListRepos__SubmitRefresh",
    LISTREPOS__ERRO: "repositores/ListRepos__Erro",
};

const INITIAL_STATE = {
    listRepos: [],
    mess: true,
    emptyRepo: true,
}

export default function repositores(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.LISTREPOS__SUBMIT:
            return state;

        case Types.LISTREPOS__ADD:
            console.log("add", state.mess);
            if (state.listRepos.find(e => e.id === action.payload.repository.id)) {
                state = { ...state, mess: false };
                return state;
            } else {
                return { ...state, listRepos: [...state.listRepos, action.payload.repository] }
            }
        case Types.LISTREPOS__DELETE:
            console.log("add", action.payload)
            // const array =
            //     state.listRepos.filter(ea => ea.id !== action.payload.idD);
            return { ...state, listRepos: [...state.listRepos.filter(ea => ea.id !== action.payload.idD)] };
        case Types.LISTREPOS__REFRESH:
            // console.log("add", action.payload.nameR.id)
            // const newArray = state.listRepos.map(e => (e.id === action.payload.nameR.id) ? action.payload.nameR : e)
            // // this.setState({ listRepos: newArray })
            // console.log("add", newArray)
            return { ...state, listRepos: [...state.listRepos.map(e => (e.id === action.payload.nameR.id) ? action.payload.nameR : e)] };;
        case Types.LISTREPOS__CLEAR:
            state = { ...state, mess: true };
            state = { ...state, emptyRepo: true };
            return state;
        case Types.LISTREPOS__ERRO:
            state = { ...state, emptyRepo: false };
            return state;
        default:
            return state;

    }

}
export const Creators = {
    submitRepositor: nameRepository => ({
        type: Types.LISTREPOS__SUBMIT,
        payload: { nameRepository },
    }),
    addRepositor: repository => ({
        type: Types.LISTREPOS__ADD,
        payload: { repository }
    }),
    deleter: idD => ({
        type: Types.LISTREPOS__DELETE,
        payload: { idD }
    }),
    submitrefresh: fullnameR => ({
        type: Types.LISTREPOS__SUBMITREFRESH,
        payload: { fullnameR }
    }),
    refresh: nameR => ({
        type: Types.LISTREPOS__REFRESH,
        payload: { nameR }
    }),
    clearRepositor: () => ({
        type: Types.LISTREPOS__CLEAR,
    }),
    erro: () => ({
        type: Types.LISTREPOS__ERRO,
    })

}
