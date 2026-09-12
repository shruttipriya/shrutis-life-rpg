package com.shruti.liferpg;

import android.app.Activity;
import android.graphics.Color;
import android.graphics.Insets;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.view.ViewGroup;
import android.view.WindowInsets;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.FrameLayout;

public class MainActivity extends Activity {
    private WebView webView;
    private FrameLayout root;
    private int insetTop = 0, insetBottom = 0;

    @Override public void onCreate(Bundle state) {
        super.onCreate(state);
        getWindow().setStatusBarColor(Color.TRANSPARENT);
        getWindow().setNavigationBarColor(Color.TRANSPARENT);
        getWindow().getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR);
        root = new FrameLayout(this);
        root.setBackgroundColor(Color.rgb(255, 248, 252));
        webView = new WebView(this);
        WebSettings s = webView.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setAllowFileAccess(true);
        s.setAllowContentAccess(false);
        s.setBuiltInZoomControls(false);
        s.setDisplayZoomControls(false);
        root.addView(webView, new FrameLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));
        root.setOnApplyWindowInsetsListener(new View.OnApplyWindowInsetsListener() {
            @Override public WindowInsets onApplyWindowInsets(View v, WindowInsets insets) {
                if (Build.VERSION.SDK_INT >= 30) {
                    Insets bars = insets.getInsets(WindowInsets.Type.systemBars());
                    insetTop = bars.top; insetBottom = bars.bottom;
                } else {
                    insetTop = insets.getSystemWindowInsetTop(); insetBottom = insets.getSystemWindowInsetBottom();
                }
                applyWebBounds(); return insets;
            }
        });
        webView.setWebViewClient(new WebViewClient() {
            @Override public void onPageFinished(WebView view, String url) {
                super.onPageFinished(view, url);
                String bottomNavFix = "(function(){var s=document.createElement('style');s.id='bottom-nav-safe-fix';s.textContent="
                        + "'.tabs{height:64px!important;bottom:0!important;padding:0!important;align-items:center!important;}"
                        + ".tabs button{height:64px!important;padding:8px 12px!important;display:flex!important;flex-direction:column!important;justify-content:center!important;align-items:center!important;line-height:1.15!important;}"
                        + ".app{padding-bottom:160px!important;}';document.head.appendChild(s);})()";
                view.evaluateJavascript(bottomNavFix, null);
                // Load only the app's original runtime scripts. Do not inject a second renderer/state layer.
                view.evaluateJavascript("(function(){['bonus.js','theme-v2.js','whimsy.js'].forEach(function(f){var s=document.createElement('script');s.src='file:///android_asset/'+f;document.head.appendChild(s);});})()", null);
            }
        });
        webView.setWebChromeClient(new WebChromeClient());
        webView.loadUrl("file:///android_asset/index.html");
        setContentView(root);
        root.requestApplyInsets();
    }

    private void applyWebBounds() {
        if (root == null || webView == null) return;
        FrameLayout.LayoutParams lp = (FrameLayout.LayoutParams) webView.getLayoutParams();
        lp.leftMargin = 0; lp.topMargin = insetTop; lp.rightMargin = 0; lp.bottomMargin = insetBottom;
        webView.setLayoutParams(lp);
    }

    @Override public void onBackPressed() {
        if (webView != null && webView.canGoBack()) webView.goBack(); else super.onBackPressed();
    }
}
