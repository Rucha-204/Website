import { useState } from 'react'
import type { FormEvent } from 'react'

type ContactFormFields = {
	name: string
	email: string
	message: string
}

export function Contact() {
	const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
	const [error, setError] = useState<string | null>(null)

	async function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()
		setStatus('submitting')
		setError(null)
		const form = new FormData(e.currentTarget as any)
		const payload: ContactFormFields = {
			name: (form.get('name') as string) || '',
			email: (form.get('email') as string) || '',
			message: (form.get('message') as string) || '',
		}
		try {
			const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined
			if (!endpoint) throw new Error('Contact endpoint missing')
			const res = await fetch(endpoint, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload),
			})
			if (!res.ok) throw new Error('Failed to submit')
			setStatus('success')
			;(e.currentTarget as HTMLFormElement).reset()
		} catch (err: any) {
			setStatus('error')
			setError(err.message || 'Submission failed')
		}
	}

	return (
		<div className="container-base py-12 md:py-16">
			<h1 className="text-3xl md:text-4xl font-bold">Contact us</h1>
			<p className="mt-3 text-slate-600">Tell us about your goals. We will get back within 24 hours.</p>
			<form onSubmit={onSubmit} className="mt-8 grid gap-4 max-w-xl">
				<label className="grid gap-1">
					<span className="text-sm font-medium">Name</span>
					<input name="name" required className="rounded-md border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600" />
				</label>
				<label className="grid gap-1">
					<span className="text-sm font-medium">Email</span>
					<input name="email" type="email" required className="rounded-md border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600" />
				</label>
				<label className="grid gap-1">
					<span className="text-sm font-medium">Message</span>
					<textarea name="message" required rows={5} className="rounded-md border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600" />
				</label>
				<button disabled={status==='submitting'} className="inline-flex items-center justify-center rounded-md bg-blue-700 px-5 py-3 text-white font-medium hover:bg-blue-800 disabled:opacity-60">
					{status==='submitting' ? 'Submitting…' : 'Send message'}
				</button>
				{status==='success' && <div className="text-green-700">Thank you! We will be in touch.</div>}
				{status==='error' && error && <div className="text-red-600">{error}</div>}
			</form>
		</div>
	)
}