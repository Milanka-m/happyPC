export interface IPortfolioCase {
	id?: number
    attributes: {
      title?: string
	  slug?: string
	  createdAt?: string
      updatedAt?: string
      publishedAt?: string
	  locale?: string
	  desc?: string
	  videocard?: string
	  cpu?: string
	  motherboard?: string
	  cooler?: string
	  ram?: string
	  drive?: string
	  powerunit?: string
	  computercase?: string
	  pricecomponents?: number
	  priceassembly?: number
	  images: {
		  data: [{
			  id?: number
			  attributes: {
					name?: string
					alternativeText?: string
					caption?: string
					width?: number
					height?: number
					formats: {
						thumbnail: {
							name?: string
							hash?: string
							ext?: string
							mime?: string
							width?: number
							height?: number
							size?: number
							path?: null
							url?: string
						}
						large: {
							name?: string
							hash?: string
							ext?: string
							mime?: string
							width?: number
							height?: number
							size?: number
							path?: null
							url?: string
						}
						medium: {
							name?: string
							hash?: string
							ext?: string
							mime?: string
							width?: number
							height?: number
							size?: number
							path?: null
							url?: string
						}
						small: {
							name?: string
							hash?: string
							ext?: string
							mime?: string
							width?: number
							height?: number
							size?: number
							path?: null
							url?: string
						}
					}
					hash?: string
					ext?: string
					mime?: string
					size?: number
					url?: string
					previewUrl?: null
					provider?: string
					provider_metadata?: null
					createdAt?: string
					updatedAt?: string
			  }
		  }]
	  }
	  navlink: {
		  id?: number
		  navlink?: string
		  linkname?: string
	  }
	  category: [{
		id?: number
		category?: string
		categorytitle?: string
	  }]
	  social: {
		  id?: number
		  socialname?: string
		  sociallink?: string
	  }
	  portfoliolink: {
		  id?: number
		  portfoliolink?: string
	  }
    }
}