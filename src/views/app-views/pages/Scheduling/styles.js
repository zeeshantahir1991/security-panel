import { AppColors } from './../../../../assets/styles/colors'

export const componentStyles = {
    container: {
        // minHeight: '80vh',
        backgroundColor: AppColors.white,
        textAlign: 'center'
    },

    companyInfoContainer: { borderRadius: 10, padding: 20, backgroundColor: AppColors.white },

    borderColor: { borderColor: AppColors.alto },
    datePicker: { borderColor: AppColors.alto, width: '100%', marginRight: 20, height:45 },
    personalInfoContainer: { borderRadius: 10, padding: 20, marginTop: 50, marginBottom: 25, backgroundColor: AppColors.white },
    continueButton: { borderRadius: 10, color: AppColors.newGrey, borderWidth: 1, borderStyle: 'solid', borderColor: AppColors.newGrey },
    selectStyle: {
        width: '100%',
        borderWidth: 1,
        borderColor: AppColors.alto,
        borderStyle: 'solid',
        borderRadius: 10,
        marginRight: 20
    },

    licenceDataContainer: {
        marginTop: 30,
        marginBottom: 30,
        padding: 30,
        backgroundColor: AppColors.alabaster2,
        borderRadius: 10
    },

    licenceDataTitleContainer: {
        // color: 'grey',
        fontWeight: 'bold',
        padding: 10,
        borderRadius: 10,
        borderColor: AppColors.mineShaft,
        borderWidth: 1,
        borderStyle: 'solid',
        textAlign: 'center',
        marginRight: 5,
        marginTop: 5
    },

    deleteIcon: {
        textAlign: 'end',
        marginRight: 5,
        marginBottom: 5
    },

    switchStyle: {
        marginRight: 10
    },

    staffMenuItemSelected: {
        backgroundColor: AppColors.tropicalBlue,
        borderRightColor: 'blue',
        borderRightWidth: 2,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderStyle: 'solid'
    },

    staffMenuItem: {
        backgroundColor: AppColors.white,
        borderRightColor: AppColors.white,
        borderRightWidth: 2,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderStyle: 'solid'
    },

    errorMessage: {
        color: AppColors.radicalRed
    },


    selectStyleSM: {
        width: '100%',
        borderWidth: 1,
        borderColor: AppColors.alto,
        borderStyle: 'solid',
        borderRadius: 10,
        marginTop: 20
    },
    searchButton: { 
        paddingHorizontal: 100, 
        width: '100%',
         borderRadius: 10, color: AppColors.newGrey, borderWidth: 1, borderStyle: 'solid', borderColor: AppColors.newGrey, backgroundColor: AppColors.white },
    searchEnabledButton: { 
        paddingHorizontal: 100, 
        width: '100%',
         borderRadius: 10, color: AppColors.white, borderWidth: 1, borderStyle: 'solid', backgroundColor: AppColors.newGrey, borderColor: AppColors.newGrey },


    filtersInputStyle: {
        borderColor: AppColors.alto,
        marginRight: 20
    },
    addCheckpointContainer: { backgroundColor: AppColors.alabaster1, borderRadius: 10, marginTop: 20, padding: 20, marginBottom: 20 },
    selectWhiteStyle: {
        width: '100%',
        borderWidth: 1,
        borderColor: AppColors.alto,
        borderStyle: 'solid',
        borderRadius: 10,
        backgroundColor: AppColors.white,
        marginRight: 20
    },
    addIntervalContainer: { backgroundColor: AppColors.alabaster2, borderRadius: 10, marginTop: 20, padding: 20, marginBottom: 20 },
    daysStyle: {
        padding: 20
    },
    tableContainer: { backgroundColor: AppColors.alabaster2, borderRadius: 10, marginTop: 20, paddingLeft: 20, paddingRight: 20, paddingTop: 20, marginBottom: 20 },
    dropDownStyleWithWidth200: {
        width: 200,
        borderWidth: 1,
        borderColor: AppColors.newGrey,
        borderStyle: 'solid',
        borderRadius: 10,
        marginRight: 20
    },

    typeStyle: {
        fontWeight: 'bold',
        fontSize: 20,
    },

    nameStyle: {
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'right'
    },

}