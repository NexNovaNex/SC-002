commit 7a28e72c5d0fb7094e633673dc07b3562fb66312
Author: riley brown <rb@visionairy.co>
Date:   Tue Feb 18 23:13:42 2025 -0600

    Update navigation to single Sign Up button with smooth scroll

diff --git a/app/page.tsx b/app/page.tsx
index 847c285..2edd7a3 100644
--- a/app/page.tsx
+++ b/app/page.tsx
@@ -170,11 +170,16 @@ export default function Page() {
           VibeDev.ai
         </Link>
         <nav className="flex items-center gap-4">
-          <Button variant="ghost" size="sm" asChild>
-            <Link href="/login">Log in</Link>
-          </Button>
-          <Button size="sm" asChild>
-            <Link href="/signup">Try for Free</Link>
+          <Button 
+            size="sm"
+            onClick={() => {
+              document.getElementById('early-access-form')?.scrollIntoView({ 
+                behavior: 'smooth',
+                block: 'center'
+              });
+            }}
+          >
+            Sign Up
           </Button>
         </nav>
       </header>
