import {SCHOLARSHIPS} from "../data/scholarships.js";
import {useState} from "react";
import {UNIVERSITIES} from "../data/universities.js";

const DEFAULT_FORM = { major: '', location: '', budget: 500 }
export function useBestMatch(){
    // any form in the drop down that user selected
    const [matchForm, setMatchForm] = useState(DEFAULT_FORM)
    // match when all forms selected combined
    const [matchResults, setMatchResults] = useState(null)

    // prev = current state:
    // { degree: 'All Degrees', field: 'All Fields', search: '' }
    // [key]: value → computed property name:
    // ['degree']: 'Bachelor'  // same as degree: 'Bachelor' in the data
    // { ...prev, [key]: value } → merge old object with the new field:
    // {
    //   degree: 'Bachelor',      // updated
    //   field: 'All Fields',     // unchanged
    //   search: ''               // unchanged
    // }[key]: value → computed property name:
    // ['degree']: 'Bachelor'  // same as degree: 'Bachelor'
    // { ...prev, [key]: value } → merge old object with the new field:
    // {
    //   degree: 'Bachelor',      // updated
    //   field: 'All Fields',     // unchanged
    //   search: ''               // unchanged
    // }
    const setMatchField = (key, value) =>
        setMatchForm(prev => ({...prev, [key]: value }))

    // logics for find match when forms selected and user click find match

    const runMatch =() => {
        const results = UNIVERSITIES
            .filter(u => {
                // to find/check match of the major, location
                // if the user didn't select anything (which is false for matchForm.major and true for !matchForm.major
                // it will return the default major which is all majors
                // or if the user selected something, this condition will apply which will return true if the universities data contain the matchForm.major
                const matchMajor    = !matchForm.major    || u.majors?.includes(matchForm.major)
                const matchLocation = !matchForm.location || u.location === matchForm.location
                const matchBudget  = u.priceMin <= matchForm.budget

                return matchMajor && matchLocation && matchBudget

            }).sort((a,b) => {
                // to sort the most suited university based on the score (between 2 universities.
                // the .sort(a,b) compare 2 universities at the time in the university array of objects

                let scoreA = 0
                let scoreB = 0
                if (matchForm.major){
                    if (a.majors.includes(matchForm.major)) scoreA += 3
                    if (b.majors.includes(matchForm.major)) scoreB += 3
                }
                if (matchForm.location) {
                    if (a.location === matchForm.location) scoreA += 2
                    if (b.location === matchForm.location) scoreB += 2
                }
                return scoreB - scoreA
            })
        setMatchResults(results)
    }

    const resetMatch = () => {
        setMatchResults(null)
        setMatchForm(DEFAULT_FORM)
    }

    return { matchForm, setMatchField, matchResults, runMatch, resetMatch }

}