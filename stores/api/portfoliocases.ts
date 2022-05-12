import { AxiosPromise } from "axios"
import { axios } from "../../core"

export default {
	show: (): AxiosPromise => 
		axios.get("api/portfoliocases?populate=images,navlink,category,social,portfoliolink"),
	
	showOne: (slug: string): AxiosPromise => 
		axios.get(`api/portfoliocases?filters[slug][$eq]=${slug}&populate=images,navlink,category,social,portfoliolink`)
}