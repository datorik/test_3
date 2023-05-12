
export const getQuestionnaireList = (state) => {
    return state.questionnaire.questionnaire;

}
export const getQuestionnaire = (state, id) => {
    console.log('id ' + id);

    return state.questionnaire.questionnaire.find(item => item.id === id)
}
